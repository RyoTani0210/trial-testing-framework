#!/bin/bash
python tests/test_unittest.py

#カバレッジ計測
coverage run -m unittest discover
