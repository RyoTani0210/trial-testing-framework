# pytest -v tests/test_pytest.py

# # Junit xlm形式
# pytest --junitxml=pytest_reports/report.xml tests/test_pytest.py

# # html形式
# pytest --html=pytest_reports/report.html tests/test_pytest.py

# # json形式
# pytest --json-report --json-report-file=pytest_reports/report.json tests/test_pytest.py
# ##改行して読みやすく
# python format_json.py pytest_reports/report.json pytest_reports/report.json

# # unittestのコードも実行できる
# pytest -v tests

# #カバレッジ計測(unittestのコードも実行される)
# pytest --cov=main tests
# pytest --cov=main --cov-report=html tests

# この設定はC0カバレッジ設定だが、実際にはC1カバレッジ基準で計測している
pytest --cov=main --cov-report=html tests/test_pytest.py

#この設定では、C1カバレッジ基準で計測している
pytest --cov=main --cov-branch --cov-report=html tests/test_pytest.py