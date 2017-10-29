/* global $ */

window.onload = function() {
    //variables
    var quotes = [
            "Don't cry because it's over, smile because it happened.",
            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            "Be yourself. Everyone else is already taken.",
            "Two things are infinite: the universe and human stupidity. And I'm not sure about the universe.",
            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            "So many books, so little time.",
            "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
            "A room without books is like a body without a soul.",
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
            "You only live once, but if you do it right, once is enough.",
            "Be the change that you wish to see in the world.",
            "In three words I can sum up everything I've learned about life: it goes on.",
            "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
            "Friendship... is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'",
            "Don't walk in front of me... I may not follow. Don't walk behind me... I may not lead. Walk beside me... Just be my friend.",
            "No one can make you feel inferior without your consent.",
            "And so it goes...",
            "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
            "Some people see the glass half full. Others see it half empty. I see a glass that's twice as big as it needs to be.",
            "Looking at her as if she was mad. She was, of course. But so was I. It was what I loved most about us.",
            "Sometimes, dreams are hidden, and sometimes, they are as clear as a passenger boat in a river."
    ];
    var authors = [
            "Dr. Seuss",
            "Marilyn Monroe",
            "Oscar Wilde",
            "Albert Einstein",
            "Bernand M. Baruch",
            "Frank Zappa",
            "William W. Purkey",
            "Marcus Tullius Cicero",
            "Dr.Seuss",
            "Mae West",
            "Mahatma Ghandi",
            "Robert Frost",
            "J.K. Rowling",
            "C.S. Lewis",
            "Albert Camus",
            "Mark Twain",
            "Kurt Vonnegut Jr.",
            "Maya Angelou",
            "George Carlin",
            "Tillie Cole",
            "Raj Suthar"
        ];
    var quote = document.getElementById("quoteBox");
    var author = document.getElementById("authorBox");
    var tweetQuote;
    var tweetAuthor;
    var tweetText;
    var button = document.getElementById("btn");
    var tBtn = document.getElementById("twttrBtn");
    var tumblrBtn = document.getElementById("tumblrBtn");
    var index = 0;
    
    //functions
    function quoteStart() {
        index = Math.floor(Math.random() * 15);
        quote.innerHTML = quotes[index];
        author.innerHTML = authors[index];
        tweetQuote = quotes[index];
        tweetAuthor = authors[index];
        tweetText = '"' + tweetQuote + '" - ' + tweetAuthor;

    }
    quoteStart();

    
    //events
    if ($(window).width() > 768) {
        $("#btn").addClass("btn-lg");
    }
    
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $("#btn").addClass("btn-lg");
        } else {
            $("#btn").removeClass("btn-lg");
        }
    });

    
    button.onclick = function() {
        index = Math.floor(Math.random() * 15);
        quote.innerHTML = quotes[index];
        author.innerHTML = authors[index];
        tweetQuote = quotes[index];
        tweetAuthor = authors[index];
        tweetText = '"' + tweetQuote + '" - ' + tweetAuthor;
        button.blur();
    };
    
    tBtn.onclick = function() {
        if (tweetText.length > 140) {
            confirm("Quote is longer than 140 character. Unable to tweet.");
        }
        else {
            window.open('https://twitter.com/intent/tweet?text=' + tweetText);

        }
    };
    
    tumblrBtn.onclick = function() {
        window.open("https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + encodeURIComponent(tweetAuthor) + "&content=" + encodeURIComponent(tweetQuote) + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&_format=html");
    };
    
};