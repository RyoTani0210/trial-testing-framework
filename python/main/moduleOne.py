# module1.py
# テストフレームワークで実行する用

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b


def covaregeTestfunction(a, b):
    """カバレッジ計測用関数
    C0なら、(a,b)=(1,1) 1ケース実行で網羅できる
    C1なら、(a,b)=(1,1),(-1,-1) の２ケースで網羅できる
    C2なら、(a,b)=(1,1),(-1,-1),(1,-1),(-1,1)の4ケースで網羅できる
    """
    x = []

    if (a > 0):
        x.append("Y")
    else :
        x.append("N")
        
    if (b > 0):
        x.append("Y")
    else:
        x.append("N")

    return "".join(x)


    