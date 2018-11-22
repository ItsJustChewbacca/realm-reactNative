# Realm React Native ToDo

Realm backend instance to make query based syncs utilizing real time react-native application built on iOS9

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
 1. Clone this repo - https://github.com/ItsJustChewbacca/React-Redux.git
 2. Create Realm Cloud Instance
	- Change the `MY_INSTANCE_ADDRESS` in constants.js to your Realm Cloud instance URL.

	- In LoginForm.js change `const user = await Realm.Sync.User.login(SERVER_URL, 'Luke', '123456')`

	to 

	`const user = await Realm.Sync.User.login(SERVER_URL, 'YOURUSERNAME', 'YOURPASSWORD')`
	
	When you create a user in your Realm Object Server.

 3. Run `NPM install`
 4. Run `react-native link realm`
 5. Run `react-native link react-native-vector-icons`
 6. Run `Npm Start` in main directory
 7. Open Xcode application - Navigate to the project directory > `ios` and open `ToDo.xcodeproj`. Start the new application by selecting a simulator and clicking Build/Run icon.
 8. Make sure the ios simulator is runnning iOS9

### Prerequisites

What things you need to install the software and how to install them

​Xcode 9.0 or later.

An environment set up to run React Native applications. If you don't have that, please follow the [React Native instructions](https://facebook.github.io/react-native/docs/getting-started.html) to set up your environment before you do more here.

​[React Native CLI​](https://facebook.github.io/react-native/docs/getting-started.html#the-react-native-cli)

TheURL of your Realm Cloud instance (you can get it by logging in to the cloud portal and clicking the Copy Instance URL link).

