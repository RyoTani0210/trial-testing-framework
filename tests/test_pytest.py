# test_my_module_pytest.py

import pytest
from main.moduleOne import *

#pytest
#pytest では、関数の名前を test_ で始めるだけでテスト関数と認識されるため、クラスの定義が不要です。これにより、コードが短く、読みやすくなります。
def test_add():
    assert add(3, 4) == 7, "Should be 7"
    assert add(-1, 1) == 0, "Should be 0"
    assert add(0, 0) == 0, "Should be 0"

def test_subtract():
    assert subtract(10, 5) == 5, "Should be 5"
    assert subtract(-1, 1) == -2, "Should be -2"
    assert subtract(0, 0) == 0, "Should be 0"

def test_decision():
    assert decision(True, True) == 1, "Should be 1"
    assert decision(True, False) == 2, "Should be 2"
    assert decision(False, False) == 2, "Error test"
    