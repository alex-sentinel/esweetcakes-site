My mom's cake business has a real website now, live on the internet, and I built it.
She was taking cake orders informally, without any system. There was no way for people to see flavors 
or prices without texting her directly. Now that i've built the website, people can see flavors, prices, 
quote forms, and a gallery of her previous work all in one place. 

Before building my mother a website of her own, I wanted to make sure I could build a working automation 
that I could add on top of it. While setting up a workflow on my own, I ran into a few walls. For example, 
I created a node which sends a form's user data to an external google sheet. While I was setting up 
credentials in n8n, Brave started blocking the sign in popup. I thought the credentials I typed in were wrong. 
Turns out Brave doesn't tell you it blocks the popup, it lets the sign in silently disappear and leaves you 
wondering if your login's broken. When I went to check, I found the google sign in right away. Lesson: check 
for a blocked popup before you start assuming your credentials are wrong.

Another obstacle I ran into was when I almost sent a confirmation email to a random person. When I was testing 
an auto reply node, I looked back at the "To" field before running it. I saw that it wasn't my test email at all. 
I guess the node was grabbing data from Google Sheets instead of from the webhook I set up, and Sheets had a lot 
of test rows sitting in it from earlier runs. It grabbed one of those instead of what I submitted. I 
already like to check the outputs before hitting execute, and here I caught that there would've been a real person getting 
a random "thanks for your order" email.

Now that I have a live site running for my mother, I am going to add a working automation on top of it that gets 
quote requests straight to her phone. I already plan to make one for my father's courier company.

