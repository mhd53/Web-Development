import * as tf from '@tensorflow/tfjs';

// Syntetic dataset
const xs = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const ys = tf.tensor2d([[0], [1], [1], [0]]);

function myDataset() {
	return [xs, ys];
}
// const dataset = [xs, ys];

export default myDataset;