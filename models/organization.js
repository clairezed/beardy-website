// mongoose -------------------------------------------------------

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var moment       = require('moment');
var S            = require('string');

moment.locale('fr')


var organizationSchema   = new Schema({
    name: String,
    website_url: String,
    description: String,
    date: Date,
    tract: String,
    picture: String,
    city: String
});

// Hooks ----------------------------------------------

organizationSchema.pre('save', function(next) {
  var preFormattedDate = this.date;
  this.date = new Date(preFormattedDate)
  next();
});

// Instance methods ----------------------------------------

organizationSchema.virtual('date_fr').
  get(function() {
    return moment(this.date).format('LL');
  });

organizationSchema.virtual('slug').
  get(function() {
    return S(this.name).slugify().s
  });

// Class methods ----------------------------------------

organizationSchema.statics.seed = function (json_entites, cb) {
  Orga = this
  Orga.count({}, function( err, count){
    console.log( "Number of orgs initially:", count );
    if(count === 0) {
      Orga.create(json_entites, cb);
    }
  })
}

// organizationSchema.set("toObject", { virtuals: true });
organizationSchema.set("toJSON", { virtuals: true });


var Organization = mongoose.model('Organization', organizationSchema);

// Organization.findOne({name: "EADS"}, (err, doc) => {
//   // console.log(doc.date);
//   console.log(doc.date_fr);
//   console.log(doc.slug);
// });

module.exports = Organization;
