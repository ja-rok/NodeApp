var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtikelSchema = new Schema({
	SAPNummer : {};
	Lagerplatz: {};
	Warengruppe: String;
	Kurztext : String;
	Typenbezeichnung: String;
	Hersteller: {
		Name: String;
		Artikelnummer: String;	
	}
	Lieferant: [
		Name: String;
		Artikelnummer: String;
	]
	Maschinen: [
		Name: String;
		Ort: String;
	]
	

});

module.exports = mongoose.model('artikel', ArtikelSchema);