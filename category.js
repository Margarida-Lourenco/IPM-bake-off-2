// Category Class 

class Category
{
    constructor(x, y, r, l, t, tgts, c)
    {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.label = l;
        this.type = t;  // to know whether to draw it as selected or as unselected circle
        this.targets = tgts;
      this.c=c;
    }

    // Checks if a mouse click took place
    // within the category
    clicked(mouse_x, mouse_y)
    {
        return dist(this.x, this.y, mouse_x, mouse_y) < this.radius / 2;
    }

    draw()
    {
        switch (this.type)
        {
            case 1:  // not selected
                // Draw category circle
                fill(color(84, 86, 67));
                circle(this.x, this.y, this.radius);
       
                // Draw label
                textFont('Roboto', 32);
                fill(color(255,255,255));
                textAlign(CENTER, CENTER);
                text(this.label, this.x, this.y);
                break;
            
            case 2:  // selected
                fill(color(193,41,46));
                circle(this.x, this.y, this.radius);

                // Draw label
                textFont('Roboto', 46);
                fill(color(255,255,255));
                textAlign(CENTER, CENTER);
                text(this.label, this.x, this.y);
                
                // Draws the targets
                this.targets.forEach((target) => target.draw());
                break;
        }
    }

    changeType(t) 
    {
        this.type = t;
    }
}