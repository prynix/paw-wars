const common = require("../../../../helpers/common");

module.exports = {
	// receives an array of countries and their awareness of the player
	obituary_heat_some: (data) => {
		const phrases = [
			`${data.length} national police agencies were aware of them.  Some of them issued star ratings on this cat.  ${data[0].country} issued a ${data[0].star} rating, ${data[1].country} had a rating of ${data[1].star} ${(data[1].star === 1) ? "star" : "stars"}, and ${data[2].country} rated them ${data[2].star} ${(data[2].star === 1) ? "star" : "stars"}.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives nothing
	obituary_heat_none: (data) => {
		const phrases = [
			"A small number of national police agencies were aware of them, but mostly they stayed under the radar."
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an integer
	obituary_stash_highest: (data) => {
		const phrases = [
			`The stash they were carrying was state-of-the-art and had a capacity of ${data} units!  Officials were shocked at the level of sophistication when they saw it.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an integer
	obituary_stash_higher: (data) => {
		const phrases = [
			`They were carrying a very modern stash that was capable of carrying ${data} units of contraband.  The level of engineering put into their stash was seriously impressive.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an integer
	obituary_stash_high: (data) => {
		const phrases = [
			`They were carrying an upgraded stash that was capable of carrying ${data} units of contraband.  It was clear they put some effort into it.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an integer
	obituary_stash_low: (data) => {
		const phrases = [
			`The stash they were carrying was mostly stock and capable of carrying ${data} units of contraband.  They bought an upgrade or two, but they weren't too serious about storing weight.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an integer
	obituary_stash_lower: (data) => {
		const phrases = [
			`They were carrying a completely stock stash that was capable of carrying ${data} units of contraband.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives nothing
	obituary_memories_nothing: (data) => {
		const phrases = [
			"I felt like I didn't really get anything done today.  Honestly, it feels like I haven't gotten anything done my entire life.  Sure makes a cat think."
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_airport: (data) => {
		const phrases = [
			`I was sitting in the ${data.data.name} in ${data.data.city} when they cat came up to me and tried to slip me something.  I figured it was money (since that keeps happening for some reason), but he slipped me a bag of marshmallows instead.  It's not money, but free candy is free candy.`,
			`My flight got delayed in ${data.data.city}, but I beat my all time high score in Flappy Human.  Totally worth it.`,
			`My heart is still racing.  So get this, I was going through security and right before they checked me, I realized I still had some cat nip in my pocket.  I took a deep breathe, and thought I was done for sure.  As security touched my pocket, he grabbed the bag, pulled it out slightly, and put it back in.  Told me to 'be more careful next time' and winked at me.  Cops in ${data.data.country} aren't half bad.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_hotel: (data) => {
		const phrases = [
			`I was about to ${(data.data === "check in") ? "check into" : "check out of"} the hotel when the bellcat stopped me and asked if I knew where to have a good time.  I told him I was new to town, but I might be able to help him out.  He looked me dead in the eye and asked for a head scratch.  I don't usually make a habit of doing it, but he looked so happy.  Hooked me up with a free mini bar for my whole stay too.`,
			`I think '${data.data}' must mean something different in this place.  When I told the front desk what I wanted to do, they nodded and smiled and then rushed away.  I must have waited 15 minutes and I was about to leave when they came back carrying a fish packaged up in a to-go container.  Best fish I had all week.  I've got to remember to come back to ${data.location.country}.`,
			`As soon as I ${(data.data === "check in") ? "checked into" : "checked out of"} the hotel I got a call from an old friend I hadn't spoken to in a while.  He told me birds aren't real, but they are actually spies for the government.  Old friends are weird sometimes.`,
			`The hotel here in ${data.location.city} sure is fancy.  They had a fountain in the lobby with fish swimming in it.  They got kind of upset after I ate a couple of them, but don't put fish in a fountain if you don't want them eaten.  That's just common sense.`,
			`The ${data.data} process at the hotel here in ${data.location.city} left something to be desired.  They made all the new guests grab a number and play musical chairs to see who gets service.  I'm lucky I lasted until the end round and got help.  I hate to think what happens to the cats that didn't get a chair fast enough.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location (item injected in)
	obituary_memories_market: (data) => {
		const phrases = [
			`I was heading to the market to ${data.data.type} the ${data.item.name} and everything seemed fine.  When I met up with the cat I was supposed to see though, he asked if he could pay in fish.  I told him I needed the money and he paid me in money AND fish.  Cats from ${data.location.country} are wild.`,
			`After I want to the market to ${data.data.type} the ${data.item.name} I decided to take in some of the local culture.  I wandered around ${data.location.country} for a while they tried some street food that looked like a deep friend tennis ball.  I don't think it actually was one, but it sure tasted good.  Maybe that's why dogs are always chasing them.`,
			`It was really a great day for ${(data.data.type === "buy") ? "buying" : "selling"} in the market.  I made an absolute killing on ${data.item.name}.  While I was sitting on a bench nearby enjoying some smuggled milk, I saw the most beautiful bird fly by and land next to me.  He was sure delicious.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_event: (data) => {
		let eventType = "";
		if (data.data.type === "adjust_cash") {
			eventType = "I ran into a cat who gave me a wad of cash.";
		} else if (data.data.type === "adjust_inventory") {
			eventType = "I found some cat who gave me a bunch of contraband.";
		} else if (data.data.type === "adjust_market") {
			eventType = "The market was going crazy, prices were out of control.";
		} else {
			eventType = "I talked to some cats, but they weren't sure what has happening.";
		}
		const phrases = [
			`On the way back from the hotel today in ${data.location.country}, things were really wild.  ${eventType}  I decided I had enough excitement for the day and stayed inside the rest of the day.  Browsed through some matches on Swattr and set up a date for later in the week.  I'm a sucker for a tabby.`,
			`I've got to start spending more time out and about in ${data.location.country}.  ${eventType}  I decided to take advantage and grab some ice cream while I was out.  If I ever get back to ${data.location.country}, I'm definitely going to have to get another cone of '${data.location.city} Special Surprise'.  I think the surprise is fish.  Absolutely delicious.`,
			`${eventType}  That kind of set the pace for the rest of the day.  After grabbing some lunch though, I decided to find a nice place to curl out and catch some sun.  I highly recommend the fountains in ${data.location.city}, they were fantastic.  Not a lot of dog traffic, and the warmest spot I've found on this whole trip.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_bank: (data) => {
		const phrases = [
			`Banks in ${data.location.country} aren't a place where you'd expect hospitality, but they sure delivered.  I just went in for a quick ${data.data.type} and they gave me a free fish with my transaction.  I wonder if they do that for all the cats.`,
			`I popped into the bank to ${data.data.type} $${data.data.amount}, but as I was leaving the guard dog stopped me and ask if I dropped some money.  He pointed to a pile on the ground and after a brief deliberation, I told him it wasn't mine.  I was kicking myself for not taking advantage of it, but after I left, I found a coupon for a free ice cream.  Being honest has its advantages.  Besides, I can always just go steal it later.`,
			`The bank in ${data.location.city} looked like it came straight out of a war zone.  I think the tellers even had flak jackets on.  I made my ${data.data.type} and got out of there quickly.  One of the customers forgot her deposit slip and I think they tased her.  Not cool bank, not cool.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_vendor: (data) => {
		const phrases = [
			`The ${data.data.vendor} vendor was in town today.  I stopped by and picked up some of their wares.  That ${data.data.vendor} really doesn't mess around.  Asked me what I wanted rudely and kicked me out as soon as I had it.  I didn't even get a punch card.  Remind me not to go back, I need those loyalty points.`,
			`After I left the ${data.data.vendor} vendor, I wanted to walk around a little bit and explore ${data.location.city}.  Did you know that they wear shoes on their head over there?  The books never really mention that.  What a beautiful and strange culture.`,
			`I was on my way to swing by the ${data.data.vendor} vendor, but before I got there, I stumbled across a street vendor selling some kind of boiled eye.  It smelled like hot garbage pizza and looked like a slimy blob.  Obviously I had to try it.  It looked just like it smelled, delicious.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_police: (data) => {
		const phrases = [
			`I got harrassed by Officer Bark today.  I was just minding my own business doing some light smuggling in ${data.location.city} when he pulled me over and wanted to search my car.  I shoved all the contraband deep in my stash and told him I knew my rights and he should come back with a warrant.`,
			`The cops in ${data.location.country} are crazy.  He stopped me to check out what I was carrying, but got started drooling and jumping when he saw the rubber ball I keep in my dashboard.  I asked if he'd like to chase it a little bit, maybe in exchange for letting me go.  He agreed, but made me throw it for him...20 times.  At least if he's asleep on the side of the road, he's not sending me to jail.  That's a win in my book.`,
			`When the cop pulled me over in ${data.location.city}, I just panicked and started barking at him.  He tucked his tail between his legs and apologized all the way back to his car.  I've got to remember to try that again next time.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_morning: (data) => {
		const phrases = [
			`On day ${data.turn}, I woke up and exected it to be like any other day.`,
			`Day ${data.turn} was kind of odd.`,
			`I didn't think day ${data.turn} would be very exciting, but it certainly was.`,
			`I woke up on day ${data.turn} and found a grey hair.`,
			`Time flies when you're smuggling!  It's day ${data.turn} already and it feels like hardly any time has passed.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives an action object + location
	obituary_memories_evening: (data) => {
		const phrases = [
			"After a long day, I curled up in bed and it was absolutely sublime.",
			"I ended the day by watching some FluffFlix and eating in my room.",
			"I definitely slept well after the busy day I had.",
			"I laid in bed that night and thought about my trip so far.",
			"I had a hard time sleeping that night.  I tried counting bunnies, but I kept trying to eat them."
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives a police object
	police_starting: (data) => {
		const phrases = [
			"As you arrive at the hotel, you see"
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	},
	// receives a police object
	police_starting_singular: (data) => {
		const phrases = [
			`the officer arrives behind you. The officer has ${data.total_hp} HP.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	}
	,
	// receives a police object
	police_starting_plural: (data) => {
		const phrases = [
			`${data.officers} officers arrive behind you. They have ${data.total_hp} HP.`
		];
		return phrases[common.getRandomInt(0, phrases.length - 1)];
	}
};
