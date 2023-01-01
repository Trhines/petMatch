const User = require('./user')
const Preferences = require('./preferences')
const Group = require('./group')
const Pet = require('./Pet')
const Like = require('./like')
const Match = require('./Match')


User.hasOne(Preferences, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Preferences.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasOne(Group, {
    foreignKey: 'group_id'
})
Group.hasMany(User, {
    foreignKey: 'group_id'
})

User.hasMany(Like, {
    foreignKey: 'user_id'
})
Like.hasOne(User, {
    foreignKey: 'user_id'
})

Group.hasMany(Like, {
    foreignKey: 'group_id'
})
Like.hasOne(Group, {
    foreignKey: 'group_id'
})

Group.hasMany(Match, {
    foreignKey: 'group_id'
})
Match.hasOne(Group, {
    foreignKey: 'group_id'
})

Pet.hasMany(Like, {
    foreignKey: 'pet_id'
})
Like.hasOne(Pet, {
    foreignKey: 'pet_id'
})

Pet.hasMany(Match, {
    foreignKey: 'pet_id'
})
Match.hasOne(Pet,{
    foreignKey: 'pet_id'
})

module.exports = { User, Preferences, Group, Like, Match };