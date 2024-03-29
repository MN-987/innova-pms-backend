const express = require("express");
const teamRouter = express.Router();

const {
  getAllTeams,
  addTeam,
  getTeam,
  updateTeam,
  deleteTeam,
  getTeamsNames
} = require("../controller/team.controller.js");
const { validation } = require("../middleware/validator/validation");
const { asyncHandler } = require("../util/errorHandling.js");
const { validateAddTeam, validateUpdateTeam } = require("../middleware/validator/team.validator.js");



teamRouter.route("/")
  .get(asyncHandler(getAllTeams))
  .post(validation(validateAddTeam), asyncHandler(addTeam));

teamRouter.get('/teams-names',
  asyncHandler(getTeamsNames)
)
teamRouter.route("/:id")
  .get(asyncHandler(getTeam))
teamRouter.route("/edit/:id")
  .post(validation(validateUpdateTeam), asyncHandler(updateTeam))
teamRouter.route("/delete/:id")
  .get(asyncHandler(deleteTeam));

module.exports = teamRouter;
