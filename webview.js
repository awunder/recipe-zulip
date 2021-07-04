module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const allMessages = Math.round(document.querySelectorAll("#global_filters .top_left_all_messages .unread_count")[0].innerText);
        Franz.setBadge(allMessages);
    };
    Franz.loop(getMessages);
};
