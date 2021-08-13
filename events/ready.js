module.exports = client => {
	console.log(`${client.user.tag} запустился!`);
	console.log('Создатель бота: BrokenInk#7777')
	client.channels.cache.get(`875747419764187146`).send('```Я запущен```')
	setInterval(function(){
		let stausi = [
	  'My Owner: BrokenInk#7777'
		]
		let aye_status = stausi[Math.floor(Math.random() * stausi.length)]
		
		client.user.setActivity(`${aye_status}`,{ type: 'WATCHING'}, { status: 'idle'})
		},60000);
  }
  