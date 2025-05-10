// The message you want to display
const message = `Happy Mother’s Day, Mama! 🌸
Thank you for everything you’ve done for me over the past 13 years. You’re not just my mother, you’re my role model, my teacher, and my biggest supporter. I’ve learned so much from you, and I can’t imagine where I’d be without your guidance. 

I know we argue from time to time, but through it all, you never stop caring about me or my sister. Your love is unconditional, and I see it every day in the small things you do, from making sure we’re always taken care of, to helping us find a way through tough situations. 

When life feels hard and the problems seem endless, you always find a way to fix them. No matter the challenge, you’ve been the person that made a way for us to get through those challenges. We are so lucky to have you. I’m constantly amazed by your strength, patience, and ability to handle everything with such grace.

I know that I’m not perfect. I don’t always do well with my studies, and I’m not always the best son I know I could be. But i know that I’m trying, and I’ll keep trying. I want to be better for you, and I want to make you proud. I promise that I will give my best to make sure that i can give you the life that you've been dreaming of.

Mama, you’re the best mother in the world, and I’ll never be able to express how thankful I am for you. Thank you for being there for us, for loving us unconditionally, and for making this family what it is. I will always cherish everything you do for me, and I’ll never stop trying to make you happy.

Happy Mother’s Day!** 💖 You’re truly the best mom anyone could ever ask for, and I love you more than words could ever say!`;

function showMessage() {
    const messageContainer = document.getElementById('message');
    let i = 0;
    messageContainer.style.display = 'block';

    function typeWriter() {
        if (i < message.length) {
            messageContainer.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}
