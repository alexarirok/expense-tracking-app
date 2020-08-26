const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "expense-tracker-2020",
    mongoUri: process.env.MONGODB_URI || 
        process.env.MONGODB_HOST || 
        'mongodb://' + (process.env.IP || 'localhost') + ':' +
        (process.env.MONGODB_PORT || '27017') + '/expenseTrackingApp'
}

export default config