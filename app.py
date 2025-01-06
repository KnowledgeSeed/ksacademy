from flask import Blueprint

ksacademy = Blueprint('ksacademy', __name__, static_folder='static', static_url_path='/apps/ksacademy/static')