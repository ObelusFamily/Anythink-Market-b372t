//TODO: seeds script should come here, so we'll be able to put some data in our local env
require("dotenv").config()
var seeder = require("mongoose-seed")
var mongoose = require("mongoose")
const { faker } = require("@faker-js/faker")
const NUMBER_OF_ITEMS = 100

seeder.connect(process.env.MONGODB_URI, () => {
	seeder.loadModels(["models/User", "models/Comment", "models/Item"])

	seeder.clearModels(["User", "Item", "Comment"], async () => {
		const data = await drSeed()

		seeder.populateModels(data, () => {
			seeder.disconnect()
		})
	})
})

const drSeed = async () => {
	const data = [
		{
			model: "User",
			documents: [],
		},
		{
			model: "Item",
			documents: [],
		},
		{
			model: "Comment",
			documents: [],
		},
	]

	const usersData = data[0].documents
	const itemsData = data[1].documents
	const commentsData = data[2].documents

	for (i = 0; i < NUMBER_OF_ITEMS; i++) {
		const newUser = await {
			_id: mongoose.Types.ObjectId(),
			username: faker.random.alpha(10),
			email: faker.internet.email(),
			password: faker.internet.password(),
		}

		await usersData.push(newUser)

		const newItem = await {
			_id: mongoose.Types.ObjectId(),
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			url: faker.image.imageUrl(),
			seller: newUser._id,
		}

		await itemsData.push(newItem)

		const newComment = await {
			seller: newUser._id,
			item: newItem._id,
			body: faker.lorem.lines(),
		}
		await commentsData.push(newComment)
	}

	return data
}
