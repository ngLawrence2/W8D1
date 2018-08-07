# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.delete_all
Bench.create!(description:'red',lat:37.7432, lng:-122.48)
Bench.create!(description:'white',lat: 37.75321, lng:-122.418396)
Bench.create!(description:'black',lat:37.721813, lng:-122.409199)
Bench.create!(description:'orange',lat:37.779225, lng:-122.511621)
Bench.create!(description:'purple',lat:37.804055, lng:-122.474518)
Bench.create!(description:'green',lat:37.776579, lng:-122.503099)
Bench.create!(description:'gray',lat:37.794345, lng:-122.431507)
