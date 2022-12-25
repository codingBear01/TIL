import sys


def answer1():
    s = list(sys.stdin.readline().rstrip())
    
    i = 0
    start = 0
    
    while i < len(s):
        if s[i] == '<': # 열린 괄호를 만나면 i 1증가
            i += 1
            while s[i] != '>': # 닫힌 괄호를 만날 때까지 i 1증가
                i += 1
            i += 1 # 닫힌 괄호를 만난 후 i 1증가
        elif s[i].isalnum():
            start = i
            while i < len(s) and s[i].isalnum():
                i += 1
            tmp = s[start:i] # 태그가 아닌 단어를 뒤집는다.
            tmp.reverse()
            s[start:i] = tmp
        else: # 공백일 경우 i 1증가
            i += 1
    
    return ''.join(s)


print('answer1', answer1())

def answer2():
    s = sys.stdin.readline().rstrip()
    
    isTag = False
    result = ''
    stack = ''

    for c in s:
        if c == '<':
            isTag = True
            result += stack[::-1]
            stack = ''
            result += c
            continue
        elif c == ">":
            isTag = False
            result += c
            continue
        elif c == ' ':
            result += stack[::-1] + ' '
            stack = ''
            continue
            
        if isTag:
            result += c
        else:
            stack += c

    return result

print('answer2', answer2())


def answer3():
    s = list(sys.stdin.readline().rstrip())
    
    isTag = False
    word = ''
    result = ''

    for c in s:
        if not isTag: # 태그 내 문자가 아니라면 뒤집어서 출력
            if c == '<':
                isTag = True
                word += c
            elif c == ' ': # 탐색하는 문자가 공백이라면
                word += c
                result += word
                word = ''
            else:
                word = c + word # 문자 거꾸로 붙여넣기
        else: # 태그 내 문자라면 그대로 출력
            word += c
            if c == '>':
                isTag = False
                result += word
                word = ''
    
    return result + word
                  
print('answer3', answer3())

def answer4():
    s = sys.stdin.readline().rstrip()
    
    stack = []
    result = []

    for i in range(len(s)):
        if s[i] == '>': # 닫힌 괄호가 나오면
            stack.append(s[i])
            result.append(''.join(stack))
            stack = []
        elif s[i] == '<' and stack: # 열린 괄호가 나왔는데 stack에 요소가 있다면
            stack.reverse() # stack을 뒤집어서 추가
            result.append(''.join(stack))
            stack = [s[i]]
        elif s[i] == ' ' and '<' not in stack: # 공백 문자인데 괄호 밖이라면
            stack.reverse() # stack을 뒤집어서 추가
            result.append(''.join(stack))
            result.append(' ')
            stack = []
        else:
            stack.append(s[i])
    
    if stack: # 아직 stack에 요소가 남아 있다면 뒤집어서 추가
        stack.reverse()
        result.append(''.join(stack))
    
    return ''.join(result)
  
print('answer4', answer4())

