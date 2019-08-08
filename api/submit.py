from http.server import BaseHTTPRequestHandler

import cgi
import json
import re
import requests
import os

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={'REQUEST_METHOD': 'POST'})
        payload_dict = json.loads(form.getvalue('json'))

        name = payload_dict['name']
        email = payload_dict['email']
        message = payload_dict['message']
        error_dict = {}

        if (not name or not _is_name_vaild(name)):
            error_dict['name'] = 'Please enter a valid name'

        if (not email or not _is_email_valid(email)):
            error_dict['email'] = 'Please enter a valid email address'

        if (not message):
            error_dict['message'] = 'Please enter a message'

        if (error_dict):
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(error_dict).encode())
            return

        #_send_email(name, email, message)
        _send_discord_message(name, email, message)

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({'success':True}).encode())
        return

def _is_name_vaild(name):
    if (not name):
        return False

    #Names typicall don't have numbers in them
    if (re.search(r"[0-9]", name)):
        return False

    return True

def _is_email_valid(email):
    #Source: http://emailregex.com/
    if (re.search(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)", email)):
        return True

    return False

def _send_discord_message(name, email, message):
    discord_message = 'Message from ' + name.strip() + '.\n'
    discord_message += 'Email Address: ' + email.strip() + '.\n'
    discord_message += message.strip()

    response = requests.post(url=os.environ.get('DISCORD_WEBHOOK_URL'),
        data=json.dumps({'content': discord_message}),
        headers={'Content-Type': 'application/json'})

def _send_email(name, email, message):
    # Create a secure SSL context
    context = ssl.create_default_context()

    my_email = os.environ.get('GMAIL_ADDRESS')
    my_password = os.environ.get('GMAIL_PASS')
    email = email.strip()

    email_message = MIMEText(message + "\nFrom Email: " + email)

    email_message['Subject'] = 'Message from ' + name.strip() + ' via the zbehnke website.'
    email_message['From'] = email
    email_message['To'] = my_email
    sender = smtplib.SMTP('smtp.gmail.com', 587)
    sender.ehlo()
    sender.starttls(context=context)
    #sender.login(my_email, my_password)
    sender.sendmail('ztbehnke62@gmail.com', [my_email], email_message.as_string())
    sender.quit()
