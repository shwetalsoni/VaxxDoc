import smartpy as sp

class VaccinationData(sp.Contract):
    def __init__(self):
        self.init(usersMap = sp.map())
        
    @sp.entry_point
    def addUser(self, params):
        email = params.email
        self.data.usersMap[email] = sp.record(
            name = params.name,
            age = params.age,
            gender = params.gender,
            number = params.number,
            v1 = False,
            v2 = False,
            v1Date = 0,
            v2Date = 0,
            hospital = ''
        )
    
    @sp.entry_point
    def markV1(self, params):
        email = params.email
        self.checkUser(email)
        self.data.usersMap[email].v1 = True
        self.data.usersMap[email].v1Date = params.date
        self.data.usersMap[email].hospital = params.hospital
    
    @sp.entry_point
    def markV2(self, params):
        email = params.email
        self.checkUser(email)
        self.data.usersMap[email].v2 = True
        self.data.usersMap[email].v2Date = params.date
            
    def checkUser(self, email):
        sp.verify(self.data.usersMap.contains(email))



if "templates" not in __name__:
    @sp.add_test(name = "MyContract")
    def test():
        c1 = VaccinationData()
        html = sp.test_scenario()
        html += c1
        html += c1.addUser(
            email='em',
            name='anshit',
            age=19,
            gender='Male',
            number=1234567890
        )
        html += c1.markV1(email='em', date=2, hospital="Fortizzz")
        html += c1.markV2(email='a', date=3).run(valid = False)
        html += c1.markV2(email='em', date=10)
        
