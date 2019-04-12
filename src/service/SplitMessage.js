import {MESSAGE_LENGTH_LIMIT} from "../constant/abstract";


/**
 * Split message into chunk when user enter message longer than 50 characters.
 */
export default class SplitMessageService {
    static splitMessage(message) {
        if (message.length > MESSAGE_LENGTH_LIMIT) {
            let parts = Math.ceil(message.length / MESSAGE_LENGTH_LIMIT);
            let index = 1;
            message = message.split(" ");
            let messageSplit = [];
            let messageBuilder = "";

            while (message.length > 0) {
                let messageShift = message.shift();

                if (messageShift.length > MESSAGE_LENGTH_LIMIT) {
                    throw new Error("Message contains a span of non-whitespace characters longer " +
                        "than " + MESSAGE_LENGTH_LIMIT + " characters is not supported");
                }

                let beforeMessageBuilder = messageBuilder;
                messageBuilder = messageBuilder + " " + messageShift;
                let temp = `${index}/${parts}${messageBuilder}`;
                if (temp.length > MESSAGE_LENGTH_LIMIT) {
                    message.unshift(messageShift);
                    messageSplit.push(`${index}/${parts}${beforeMessageBuilder}`);
                    messageBuilder = "";
                    index += 1;
                } else if (message.length === 0) {
                    messageSplit.push(temp)
                }

            }
            return messageSplit;
        }
        return [message]
    }
}