new Vue({
	el: "#desafio",
	data: {
		nome: "Adriano",
		idade: 39,
		imagem: "wallpaperflare.com_wallpaper.jpg",
	},
	methods: {
		numeroRandomico: function () {
			return Math.random();
		},
	},
});
