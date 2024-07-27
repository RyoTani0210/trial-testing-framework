pytest -v test_pytest.py

# Junit xlm形式
pytest --junitxml=reports/report.xml test_pytest.py

# html形式
pytest --html=reports/report.html test_pytest.py

# json形式
pytest --json-report --json-report-file=reports/report.json test_pytest.py
##改行して読みやすく
python format_json.py reports/report.json reports/report.json


