// im seeing amazon prime actors
class Movie {
    constructor(title) {
        this.title = title;
        this.actors = null;
        this.members = 0;
        this.length = 0;
    }
    head() {
        return this.actors;
    }
    duration() {
        return this.length;
    }
    add(act, age, sex) {
        var actor = new Actor(act, age, sex);
        if(this.actors) {
            let head = this.actors;
            while(head == null) {
                head.scene = actor;
            }
            head = head.scene;
        } else {
            this.actors = actor;
        }
        this.memebers++;
    }
}

class Actor {
    constructor(name, age, sex) {
        this.info = {
            name: name,
            age: age,
            sex: sex
        };
        this.scene = null;
    }
}

class Movie {
    constructor(title) {
        this.title = title;
        this.stream = null;
        this.twitch = 0;
    }
    head() {
        this.stream = null;
    } // blow up pool // nose bleed
}
// split pill
// comment with a game pad.

// men are disgusting. they only want one thing. 
// yea i totally feel that. comments.
// what if someone tried to save her?

// thank you next. go away. i don't want anyone to see this.
// pop music. why doesn't it work? sugar daddies.
// nerds. 

// none of the women are willing to do that.
// you can transition to a avatar.
// what is there to lose?

// those girls have potential rather than face the truth you hide from it.
// these women are beating men in their domain.
// metamorphasis. 


