from flask import Flask, jsonify, request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



def getDbConnection():
    conn = sqlite3.connect('./src/backend/homeworkdatabase.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/homework', methods=['GET'])
def getSubjects():
    conn = getDbConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM homework")
    homeworks = cursor.fetchall()
    conn.close()

    result = [dict(homework) for homework in homeworks]
    return jsonify(result)

@app.route('/api/homework', methods=['POST'])
def addSubject():
    data = request.get_json()
    subject = data.get('subject')
    description = data.get('description')
    date = data.get('date')

    conn = getDbConnection()
    cursor = conn.cursor()

    cursor.execute("INSERT INTO homework (subject, description, date) VALUES (?, ?, ?)", (subject, description, date))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Subject added successfully'}), 201

@app.route('/api/homework', methods=['DELETE'])
def deleteSubject():
    data = request.get_json()
    subject = data.get('subject')
    date = data.get('date')

    conn = getDbConnection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM homework WHERE subject = ? AND date = ?", (subject, date))
    if cursor.rowcount == 0:
        conn.commit()
        conn.close()
        return jsonify({'message': f'deleted {cursor.rowcount} records'}), 404
    conn.commit()
    conn.close()
    return jsonify({'message': f'deleted {cursor.rowcount} records'}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)