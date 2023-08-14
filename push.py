from os import system

message = input('message: ')

system('git config user.name "acsasilveira"')
system('git config user.email "acsa.silveiras@gmail.com"')
system('git add .')
system('git commit -m "' + message + '"')
system('git push origin master')