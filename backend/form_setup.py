from flask import session, redirect, url_for, render_template, request
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, EqualTo, Email, ValidationError

# from helpers.auth import return_password, check_user_exists
import helpers.db

'''def validate_account(form, field):
    entered_username = form.username.data
    entered_password = field.data
    if return_password(entered_username) != entered_password:
        raise ValidationError("Invalid username or password ")
        '''

'''class RegistrationForm(FlaskForm):
    username = StringField('Name', 
        validators = [InputRequired(message = "Username required"),
        Length(min = 4, max = 30, message = "Username must be between 4 and 30 characters")
        ])
    password = PasswordField('Pass',
        validators = [InputRequired(message = "Username required"),
        Length(min = 4, max = 30, message = "Password must be between 10 and 30 characters")
        ])
    confirm_password = PasswordField('ConfPass',
        validators = [InputRequired(message = "Username required"),
        EqualTo('password', message = "Passwords must match")
        ])
    email = StringField('Email',
        validators = [InputRequired(message = "Email required"), Email()
        ])
    submit = SubmitField('Register')
    def validate_username(self, username):
        if check_user_exists(username.data):
            raise ValidationError("Username already exists")

'''
'''class LoginForm(FlaskForm):
    username = StringField('Name', 
        validators = [InputRequired(message = "Username required"),
        Length(min = 4, max = 30, message = "Username must be between 4 and 30 characters")])
    password = PasswordField('Pass',
        validators = [InputRequired(message = "Password required"),
        Length(min = 4, max = 30, message = "Password must be between 4 and 30 characters"),
        validate_account])
    submit = SubmitField('Log In')
    '''
