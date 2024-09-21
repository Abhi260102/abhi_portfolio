import mongoose from "mongoose";
const connection = { "isConnected":0 }
async function dbConnect() {
    if (connection?.isConnected) {
        return
    }
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL || '', {})
        connection.isConnected = conn.connections[0].readyState
        console.log('DB Connected sussessfully')


    } catch (err) {
        console.log('DB Connected failed')
        process.emit(1)
    }
}

export default dbConnect