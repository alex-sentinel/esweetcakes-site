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

Another obstacle I ran into was when I almost sent a confirmation email to a total stranger. I was testing 
an auto reply node and previewed the "To" field before running it. I seen that it wasn't my test email at all. 
I saw that the node was pulling from Google Sheets instead of straight from the webhook, and Sheets had a bunch 
of old test rows sitting in it from earlier runs. It grabbed one of those instead of my actual submission. I 
already like to check outputs before hitting execute, here I caught that there would've been a real person getting 
a random "thanks for your order" email.

Now that I have a live site running for my mother, I am going to add a working automation on top of it that gets 
quote requests straight to her phone. I already plan to make one for my father's courier company.

