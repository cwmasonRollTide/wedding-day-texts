export default function handler(event, context) {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))
  console.log("Context: \n" + JSON.stringify(context));
}
