# module1.py
# テストフレームワークで実行する用

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b


def covaregeTestfunction(a, b):
    """カバレッジ計測用関数
    """
    x = a + b #ステートメント1 (必ず通る)

    if (a>1 & x>1):
        return 100 #ステートメントメント2 (aが負の数かxが負の数なら通らない)
    if (x < -1):
        return -100  #ステートメント3(xが正から0なら通らない)



    