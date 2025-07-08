
# 📚 DOM vs CSSOM vs JS – Priority & Browser Rendering Process

## 🚦 Priority & Execution Order

### ✅ 1. **DOM (Document Object Model)**
- **What is it?**  
  A tree-like structure created from **HTML** by the browser.
- **When it runs?**  
  **Runs first** — parsed as soon as HTML is loaded.

### ✅ 2. **CSSOM (CSS Object Model)**
- **What is it?**  
  A structure created from **CSS rules**, representing how elements should look.
- **When it runs?**  
  **After the DOM** — browser must finish parsing CSS to style the page.

### ✅ 3. **JS (JavaScript)**
- **What is it?**  
  Code that can manipulate **DOM**, **CSSOM**, or add **interactivity**.
- **When it runs?**  
  Runs **after DOM & CSSOM**, unless it's blocking (like `<script>` in `<head>` without `defer/async`).

---

## 🧠 Browser Rendering Process (Step-by-step)

1. **HTML Parsing and DOM Creation**  
   The browser first parses the HTML to build the **DOM**, which is a **tree-like structure** representing the content of the page.

2. **CSS Parsing and CSSOM Creation**  
   It then parses all CSS (external stylesheets, `<style>`, or inline styles) to create the **CSSOM**, which represents how each element should be styled.

3. **Render Tree Construction**  
   The browser **combines DOM + CSSOM** to build the **Render Tree** – a structure containing only visible nodes that need to be rendered.

4. **Layout (Reflow)**  
   It calculates **position and size** of each element in the render tree. This is also called the layout phase.

5. **Painting (Repaint)**  
   Finally, the browser **paints pixels to the screen**, based on the render tree and layout data.

---

## ⚠️ JavaScript & Blocking Behavior

- **JS can block DOM & CSSOM parsing** if placed without `defer` or `async`.
- It can **modify the DOM or CSSOM**, which may **trigger reflows (layout recalculations)** or **repaints**, affecting performance.
- Always use `defer` or `async` in scripts to **avoid render-blocking** and improve page load speed.

---

## 🗂️ Summary Table

| Component | Description            | Execution Order | Can Block Others? |
|-----------|------------------------|------------------|--------------------|
| **DOM**   | Structure of the page  | 1st              | ❌ No              |
| **CSSOM** | Visual styling         | 2nd              | ❌ No              |
| **JS**    | Interactivity logic    | 3rd (or later)   | ✅ Yes (if not deferred) |
