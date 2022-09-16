const express = require("express");
const { pool } = require("./db");

const app = express();
const PORT = 8081;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

app.get("/api/all_menus", async (req, res) => {
	try {
		const data = await pool.query("SELECT * FROM menus");
		return res.json(data[0]);
	} catch (error) {
		return res.json({
			get_all_menus: false,
		});
	}
});

app.get("/api/all_menus_name", async (req, res) => {
	try {
		const data = await pool.query("SELECT menu_id, menu_name FROM menus");
		return res.json(data[0]);
	} catch (error) {
		return res.json({
			get_all_menus_name: false,
		});
	}
});

app.get("/api/menu", async (req, res) => {
	return res.json({
		error: "아이디가 필요합니다",
	});
});

app.get("/api/menu/:menu_id", async (req, res) => {
	try {
		if (req.params.menu_id) {
			const data = await pool.query(
				`SELECT * FROM menus WHERE menu_id = ${req.params.menu_id}`
			);
			if (data[0].length === 0) {
				return res.json({
					get_menu: false,
				});
			}
			return res.json(data[0][0]);
		}
		return res.json({
			get_menu: false,
		});
	} catch (error) {
		return res.json({
			get_menu: false,
		});
	}
});

app.get("/api/all_orders", async (req, res) => {
	try {
		const data = await pool.query(
			`SELECT orders.order_id, menus.menu_name, orders.menu_quantity, orders.menu_order_detail 
			FROM orders 
			LEFT JOIN menus 
			ON orders.menu_id = menus.menu_id
			ORDER BY orders.order_id`
		);
		return res.json(data[0]);
	} catch (error) {
		return res.json({
			get_all_orders: false,
		});
	}
});

app.get("/api/order", async (req, res) => {
	return res.json({
		error: "아이디가 필요합니다",
	});
});

app.get("/api/order/:order_id", async (req, res) => {
	try {
		if (req.params.order_id) {
			const data = await pool.query(
				`SELECT orders.order_id, menus.menu_name, orders.menu_quantity, orders.menu_order_detail 
				FROM orders 
				LEFT JOIN menus 
				ON orders.menu_id = menus.menu_id 
				WHERE order_id = ${req.params.order_id}`
			);
			if (data[0].length === 0) {
				return res.json({
					get_order: false,
				});
			}
			return res.json(data[0][0]);
		}
		return res.json({
			get_order: false,
		});
	} catch (error) {
		return res.json({
			get_order: false,
		});
	}
});

app.post("/api/order", async (req, res) => {
	try {
		if (req.body.menu_id && req.body.menu_quantity) {
			if (req.body.menu_order_detail === undefined) {
				await pool.query(
					`INSERT INTO orders
					(menu_id, menu_quantity)
					VALUES
					(${req.body.menu_id}, ${req.body.menu_quantity})`
				);
			} else {
				await pool.query(
					`INSERT INTO orders
					(menu_id, menu_quantity, menu_order_detail)
					VALUES
					(${req.body.menu_id}, ${req.body.menu_quantity}, "${req.body.menu_order_detail}")`
				);
			}
			const data = await pool.query(
				"SELECT * FROM orders ORDER BY order_id DESC LIMIT 1"
			);
			return res.json({
				post_order: true,
				post_order_id: data[0][0].order_id,
			});
		}
		return res.json({
			post_order: false,
		});
	} catch (error) {
		return res.json({
			post_order: false,
		});
	}
});

app.patch("/api/order", async (req, res) => {
	try {
		if (req.body.order_id && req.body.menu_id && req.body.menu_quantity) {
			if (req.body.menu_order_detail === undefined) {
				const data = await pool.query(
					`UPDATE orders 
					SET menu_id = ${req.body.menu_id}, 
					menu_quantity = ${req.body.menu_quantity} 
					WHERE order_id = ${req.body.order_id}`
				);
				if (data[0].affectedRows === 0) {
					return res.json({
						patch_order: false,
					});
				}
			} else {
				const data = await pool.query(
					`UPDATE orders 
					SET menu_id = ${req.body.menu_id}, 
					menu_quantity = ${req.body.menu_quantity},
					menu_order_detail = "${req.body.menu_order_detail}"
					WHERE order_id = ${req.body.order_id}`
				);
				if (data[0].affectedRows === 0) {
					return res.json({
						patch_order: false,
					});
				}
			}
			return res.json({
				patch_order: true,
				patch_order_id: req.body.order_id,
			});
		}
		return res.json({
			patch_order: false,
		});
	} catch (error) {
		return res.json({
			patch_order: false,
		});
	}
});

app.delete("/api/order", async (req, res) => {
	try {
		if (req.body.order_id) {
			const data = await pool.query(
				`DELETE FROM orders WHERE order_id = ${req.body.order_id}`
			);
			if (data[0].affectedRows === 0) {
				return res.json({
					delete_order: false,
				});
			}
			return res.json({
				delete_order: true,
				delete_order_id: req.body.order_id,
			});
		}
		return res.json({
			delete_order: false,
		});
	} catch (error) {
		return res.json({
			delete_order: false,
		});
	}
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
