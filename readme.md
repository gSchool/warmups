#Github Autograder

This python script clones github repositories of the same name, then executes specified shell commands in the cloned repo directory. The text output of the shell command is added to a top level file in the repository called results.txt. 

The autograder then creates a branch and adds a commit with the new file. If you use publish mode, the autograder will push the results of grading to the github remotes. If you pull-request mode a PR will be opened against the github repo you specify, giving you a nice place to provide comments about the code. 

## Setup

```
$ pip install gitpython
$ cp config_template.py config.py
```

Now fill out config.py with these details:

* Your github username & email address
* The github usernames of the students who should be autograded

### Bonus, run this as a native command:

```
# To run the command like a shell script, rather than a python file
$ ln -s `pwd`/autograder.py /usr/local/bin/autograder 
```

### Bonus, get the auto-pull request feature to work

To use the --pull-request/-P option you must have githubs 'hub' command installed. It's a great command and you might like it even if you don't use this feature: [https://hub.github.com/](https://hub.github.com/)

```
$ brew install hub

# OR 

$ apt-get install hub

# OR go to the link provided and download the installer
```

## Running the script

Read the documentation:

```
$ python autograder.py -h
```

Usage Description:

You must specify a github repository name, and optionally you can provide a test command, as well as a setup command. If you do not provide a test command, it will echo "no tests provided" to results.txt.

```
$ python autograder.py repo_name [test_command] [setup_command]
```

### Example Usage:

```
# Simply clone the repos for all students into ./lodash_solutions
$ python autograder.py lodash

# Clone the repos then run "npm test" and capture the output
# for the results.txt file
$ python autograder.py lodash "npm test"

# Clone the repos then run "npm install" to prime the repo then
# run "npm test" and capture the output for results.txt
$ python autograder.py lodash "npm test" "npm install"
```

### Example warmup attendance command:
`autograder --setup-modifier mocha_attendance --output-modifier mocha_json_attendance -s w1/t-using-attendance-word-only --summary g26-challenges-so-far "mocha --reporter json autograder_tests" "npm install mocha chai"`

Break it down: 

First we use the modifiers for mocha attendance. Unfortunately this requires us to use the json reporter in our test command. 
`--setup-modifier mocha_attendance --output-modifier mocha_json_attendance`

Specify a sub directory:
`-s w1/t-using-attendance-word-only`

Summary mode, for less output:
`--summary`

test command, setup command:
`"mocha --reporter json autograder_tests" "npm install mocha chai"`

(Yes, I agree, this should be made cleaner)







