const mydata = {
    name: 'Gillian',
    showName() {
        console.log('Hello ' + this.name)
    }
}

mydata.showName()  // This works as JS knows that 'this' means mydata

const ddd = mydata.showName

//ddd()  // This doesn't work as JS doesn't know what 'this' refers to

//  So we have to tell it what 'this' means when we declare it - e.g. the mydata object

const eee = mydata.showName.bind(mydata)

eee()

// Alternatively, we could have bound it to some other object that has the property needed i.e. name

const fff = mydata.showName.bind({ name: 'Ann'})

fff()

