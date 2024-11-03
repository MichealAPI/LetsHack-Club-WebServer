from flask import Flask, render_template
from flask_pymongo import PyMongo
from config import Config
from flask import request, redirect, url_for
from datetime import datetime

app = Flask(__name__)
app.config.from_object(Config)
mongo = PyMongo(app)

ALLOWED_EMAIL_DOMAINS = ['panettipitagora.edu.it']


@app.route('/')
def landing():
    return render_template('index.html')


@app.route("/submit", methods=['POST'])
def submit():
    email: str = request.form['emailInput'].lower()
    date_now: str = datetime.now().strftime('%d-%m-%Y %H:%M:%S.%f')

    if not email.endswith('@panettipitagora.edu.it'):
        return redirect(url_for('landing')), 400 # Bad Request

    if mongo.db.users.find_one({'email': email}):
        return redirect(url_for('landing')), 400 # Bad Request

    mongo.db.users.insert_one({
        'email': email,
        "current_date": date_now
    })

    if not mongo.db.users.find_one({'email': email}):
        return redirect(url_for('landing')), 500 # Internal Server Error

    return redirect(url_for('landing')), 200 # OK


if __name__ == '__main__':
    app.run()
