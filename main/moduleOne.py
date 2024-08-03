# module1.py
# テストフレームワークで実行する用

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def decision(a, b):
    if a & b:
        return 1
    elif a:
        return 2
    elif b:
        return 3
    else:
        return 4

def covaregeTestfunction(a, b):
    """カバレッジ計測用関数
    """
    x = a + b #ステートメント1 (必ず通る)

    if (a>1 & x>1):
        x = 100 #ステートメントメント2 (aが負の数かxが負の数なら通らない)
    if (x < -1):
        x = -100  #ステートメント3(xが正から0なら通らない)
    
    return x


    