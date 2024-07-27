# test_my_module_pytest.py

import pytest
from moduleOne import add, subtract

def test_add():
    assert add(3, 4) == 7, "Should be 7"
    assert add(-1, 1) == 0, "Should be 0"
    assert add(0, 0) == 0, "Should be 0"

def test_subtract():
    assert subtract(10, 5) == 5, "Should be 5"
    assert subtract(-1, 1) == -2, "Should be -2"
    assert subtract(0, 0) == 0, "Should be 0"
