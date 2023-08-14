from subprocess import Popen
from os import system
import shutil
import platform
from time import sleep

system('npm install')


sistema = platform.system()
if sistema=="Linux":
    p1 = Popen(['x-terminal-emulator', '-e', 'bash', '-c', 'npm run dev'])
    sleep(5)
    p2 = Popen(['x-terminal-emulator', '-e', 'bash', '-c', 'xdg-open http://127.0.0.1:8000'])
else:
    p1 = Popen('start cmd /k npm run dev', shell=True)
    sleep(5)
    p3 = Popen('start http://127.0.0.1:8000', shell=True)