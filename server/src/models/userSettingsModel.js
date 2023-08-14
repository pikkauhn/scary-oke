const mongoose = require('mongoose');

const UserSettingSchema = new mongoose.Schema({
    viewProjects: {
        type: Boolean,
    },
    viewTasks: {
        type: Boolean,
    },
    viewCalendar: {
        type: Boolean,
    },
    viewNewTask: {
        type: Boolean,
    },
    viewNewProject: {
        type: Boolean,
    },
    filterDueDate: {
        type: Boolean,
    },
    filterDateEntered: {
        type: Boolean,
    },
    filterName: {
        type: Boolean,
    },
    UserID: {
        type: String,
    }
});

const UserSettingsModel = mongoose.model('UserSettings', UserSettingSchema);

module.exports = UserSettingsModel;