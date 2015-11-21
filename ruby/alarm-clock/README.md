Alarm Clock Warmup
===
Write a ruby script that will say “Time’s up!” after a given number of seconds or minutes.

Prep
===

First, get familiar with the “say” command.  Please use headphones if you have them :)  From the terminal type:

	say "Hello, I can talk!"
say -v "Pipe Orga" "Hello, I am talking!"

Next, get familiar with Ruby’s system command, which runs the command you give it as if it were on the command line.  From IRB type:

system("ls -la")
system("pwd")

Next, get familiar with infinite loops and “exit”.  Add the following to a ruby file and run it:

	i = 0
	while true
          	exit if i == 100
puts i
i += 1
end

Making it work
===

Now you have all the tools you need to write an alarm clock that tells you when it’s done!  Here’s how it works:

In your ruby file, grab the current time and put it in a variable called start_time
Create a loop that compares the current time to the start_time
If more than 10 seconds have passed, make the computer say “Time’s up!” and exit

Once you’ve got that, take it to the next level by:

Allowing the script to take a time like “ruby my_clock.rb 2 minutes” (HINT: use ARGV to find “2” and “minutes”)

NOTE: if you get a script that runs forever, use CTL+C to stop it.
