'use strict';

import { Category, Categories } from '../models/category';

export let getCategories = (req, res, next) => {
	Categories.forge().query('where', 'deleted', '=', '0').fetch({columns: ['id', 'name']}).then((collection) => {
		res.json({
			result : true,
			message: 'Categorías obtenidas.',
			data : collection
		})
	}).catch((err) => {
		res.status(500).json({
			result : false,
			message : err.message 
		})
	})
};

export let getCategoryById = (req, res, next) => {
	Category.forge({ id : req.params.id}).query('where', 'deleted', '=', '0').fetch().then((category) => {
		if(!category){
			res.status(404).json({
				result : false,
				message : 'no se encontro' 
			})
		}else{
			res.json({
				result : true,
				message: 'Categoría obtenida.',
				data : category
			})
		}
	}).catch((err) => {
		res.status(500).json({
			result : false,
			message : err.message 
		})
	})
};

export let saveCategory = (req, res, next) => {
	Category.forge({name : req.body.name}).save().then((category) => {
		res.json({
			/*data : {
				id : category.get('id'),
				name: category.get('name')
			}*/
			result : true,
			message: 'Categoría creada.',
			data : category
		})
	}).catch((err) => {
		res.status(500).json({
			result : false,
			message : err.message 
		})
	})
};

export let updateCategory = (req, res, next) => {
	Category.forge({ id : req.body.id }).fetch({ require : true }).then((category) => {
		category.save({
			name : req.body.name || category.get('name')
		}).then(() => {
			res.json({
				result : true,
				message: 'Categoría modificada.',
			})
		}).catch((err)=> {
			res.json({
				result : false,
				message : err.message 
			})
		}).catch((err) => {
			res.status(500).json({
				result : false,
				message : err.message 
			})
		})
	})
};

export let deleteCategory = (req, res, next) => {
	Category.forge({ id : req.params.id })
	.fetch({ require : true })
	.then((category) => {
		//category.destroy()
		category.save({
			deleted : 1
		})
		.then(() => {
			res.json({
				result : true,
				message: 'Categoría eliminada.',
			})
		})
		.catch((err) => {
			res.status(500)
			.json({
				result : false,
				message : err.message 
			})
		})
	})
	.catch((err) => {
		res.status(500)
		.json({
			result : false,
			message : err.message 
		})
	})
};
