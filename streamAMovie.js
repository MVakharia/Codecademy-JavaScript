class Network {
    constructor(bandwidth, users) {
        this._bandwidth = bandwidth;

        this._users = users;
    }

    get data () {
        return this._bandwidth;
    }

    get users () {
        return this._users;
    }

    movieTime () {

        //Each user pulls 5 units of bandwidth on average.
        const averageUserBandwidth = 5;

        // The average total amount of bandwidth pulled.
        const totalUserBandwidth = this._users * averageUserBandwidth;

        //This is the bandwidth that remains after the users have pulled their bandwidth.
        let remainingData = this._bandwidth - totalUserBandwidth;

        //If the remaining bandwidth exceeds double the average, one more user may pull some bandwidth.
        return remainingData >= averageUserBandwidth * 2;
    }
}