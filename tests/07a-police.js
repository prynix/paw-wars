"use strict";

const expect = require("chai").expect;

const main = require("./00-main");
const config = main.config;
const common = main.common;
const model = main.model;

const police = main.police;

let life;

describe("Police - Starting State", () => {
	before(() => {
		// set up life
		life = model.generateLife(config.PLAYER, config.LOCATION);
		life.testing = true;
	});

	it("current police state should match config values", (done) => {
		// heat
		expect(life.current.police.heat).to.be.a("number");
		expect(life.current.police.heat).to.equal(config.GAME.police.starting_heat);
		// rate
		expect(life.current.police.rate).to.be.a("number");
		expect(life.current.police.rate).to.equal(config.GAME.police.heat_rate);
		// awareness
		expect(life.current.police.awareness).to.be.an("object");
		// current awareness value
		expect(life.current.police.awareness).to.have.property(life.current.location.country);
		expect(life.current.police.awareness[life.current.location.country]).to.be.a("number");
		expect(life.current.police.awareness[life.current.location.country]).to.equal(config.GAME.police.starting_heat);
		// encounter
		expect(life.current.police.encounter).to.be.a("null");
		// history
		expect(life.current.police.history).to.be.an("array");
		expect(life.current.police.history.length).to.equal(0);
		return done();
	});
});