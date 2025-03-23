from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/orders', methods=['GET'])
def get_orders():
    return jsonify([
	{"id":0,"name":"Mateus José","date_entrega":"18-03-25"},
	{"id":1,"name":"Breno Polezi","date_entrega":"20-03-25"},
    ])

if __name__ == '__main__':
    app.run(debug=True)
