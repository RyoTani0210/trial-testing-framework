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



def test_coverageTestFunction():
    # assert covaregeTestfunction(0, 0) == 0, "statement1しか通らない"
    assert covaregeTestfunction(1, 0) == 100, "statement1と2を通る"
    assert covaregeTestfunction(0, -10) == -100, "statement1と3を通る"
