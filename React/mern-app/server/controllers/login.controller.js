import User from '../models/user';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */

 export function getUsers(req, res) {
 	User.find().sort('-dateAdded').exec((err, posts) => {
 		if (err) {
 			res.status(500).send(err);
 		}
 		res.json({ posts });

 	});
 }


 /**
  * Add a user to database
  * @param req
  * @param res
  */
export function addPost(req, res) {
}