from flask import Flask, render_template
from config import *
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html",NAME=NAME)

if __name__ == '__main__':
	app.run(debug=True)